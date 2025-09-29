# Assistente de Desenvolvimento Pessoal – Workflow n8n (MVP)

Este documento descreve como utilizar o workflow `assistente_dev_pessoal_workflow.json`, que foi gerado para operar o assistente de desenvolvimento pessoal via WhatsApp + Supabase + n8n. Importe o JSON no n8n e siga as instruções abaixo para configurar credenciais, revisar prompts e validar o fluxo.

## 1. Componentes principais do workflow

- **WhatsApp Trigger**: recebe mensagens do WhatsApp Business Cloud e envia para o fluxo.
- **Onboarding branch**: coleta dados em 4 perguntas, salva no Supabase e gera o plano personalizado com OpenAI.
- **Active branch**: identifica mensagens de confirmação, marca hábitos como concluídos e usa o node *AI Agent* para respostas contexto-aware.
- **Reminder cron**: verifica periodicamente os hábitos com lembretes próximos e dispara mensagens automáticas.

## 2. Pré-requisitos e credenciais

Crie e associe manualmente as credenciais nos nós correspondentes após importar o fluxo:

1. **WhatsApp Business Cloud Trigger** (node “WhatsApp Trigger”).
2. **WhatsApp Business Cloud** (todos os nodes de envio de mensagem).
3. **Supabase (Header Auth)**: configure `apikey` e `Authorization: Bearer <service-role-key>` para cada `HTTP Request` que usa Supabase.
4. **OpenAI Chat Model** (node “Generate Personalized Plan”).
5. **AI Agent** (node “AI Agent Reply”) – selecione o modelo e, se desejar, conecte ferramentas adicionais.

> Dica: crie uma única credencial `HTTP Header Auth` para o Supabase e reutilize em todos os nodes que fazem requisições ao banco.

## 3. Ajustes recomendados após o import

1. **Defina as credenciais** em cada node (WhatsApp, Supabase, OpenAI).
2. **Revise os textos enviados** para alinhar com o tom da marca.
3. **Valide o prompt do node “Generate Personalized Plan”** e confirme que a saída em JSON está compatível com a estrutura esperada pelo node “Format Plan Output”.
4. **Configure o node AI Agent Reply**:
   - Ajuste o modelo (ex.: `gpt-4o`, `gpt-4o-mini`, etc.).
   - Caso utilize ferramentas adicionais (Supabase como tool, busca, etc.), conecte-as manualmente.
5. **Teste o cron de lembretes**: garanta que os horários (`reminder_times`) estejam armazenados em formato `HH:MM` (24h) no Supabase.
6. **(Opcional) Registrar conversas**: adicione nodes `HTTP Request` após receber/enviar mensagens para gravar `conversations` no Supabase. O fluxo atual busca histórico, mas o insert deve ser configurado conforme a regra de negócio.

## 4. Supabase – tabelas e queries utilizadas

- **users**: atualizado em cada etapa do onboarding e para marcar conclusão (`onboarding_completed`).
- **habits**: recebe os hábitos produzidos pela IA (node “Insert Habits”).
- **habit_logs**: upsert de confirmações (“Upsert Habit Log”).
- **conversations**: leitura para contexto do agente (necessário alimentar via inserts).

### Cabeçalhos importantes nos requests

- `Prefer: return=representation` (para receber o registro atualizado).
- `Content-Type: application/json`.
- `Prefer: resolution=merge-duplicates` (usado no upsert de `habit_logs`).

## 5. Fluxos detalhados

### Onboarding

1. Usuário novo → cria registro no Supabase (`Create User Record`) e envia pergunta inicial.
2. Cada resposta atualiza o respectivo campo (`goals`, `bad_habits`, `financial_situation`, `available_times`).
3. Após Step 4, o node “Generate Personalized Plan” monta o plano em JSON.
4. “Format Plan Output” transforma o JSON em payload para `habits`.
5. “Insert Habits” grava os hábitos, “Complete Onboarding” marca o usuário como ativo e “Send Plan Summary” entrega o resumo.

### Usuário ativo

- Node “Detect Confirmation” identifica mensagens do tipo “feito/done…”.
- Se confirmação → busca hábito ativo, faz upsert no `habit_logs` e envia celebração.
- Caso contrário → carrega hábitos ativos, progresso do dia e histórico, compõe o contexto (`Build Agent Context`) e chama o node “AI Agent Reply”.

### Lembretes

- Cron a cada 10 minutos (`Reminder Cron`).
- Busca hábitos ativos com `reminder_times` (`Fetch Reminder Candidates`).
- “Filter Reminder Window” seleciona somente os hábitos cujo horário bate com o momento atual, respeitando o timezone do usuário.
- “Send Reminder” dispara a mensagem personalizada.

## 6. Checklist de testes

1. Executar onboarding completo (novo número) e verificar registros em `users` e `habits`.
2. Enviar mensagem com palavra-chave de confirmação (ex.: “feito”) e confirmar que o `habit_logs` recebe o registro.
3. Conversar com o assistente após onboarding e observar a resposta do AI Agent (ajustar prompt se necessário).
4. Forçar manualmente o cron (executar o node) para validar o envio de lembretes.

## 7. Próximos passos sugeridos

- Adicionar logs de conversa (usuário/assistente) diretamente no Supabase.
- Criar workflow separado para relatório semanal/mensal ou estender este JSON com novo cron.
- Implementar controle anti-spam (limites de mensagens) e métricas (ex.: DataDog, supabase logs).

---

**Arquivo auxiliar**: `Docs/Codex/assistente_dev_pessoal_workflow.json`
