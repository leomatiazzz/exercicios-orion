-- ============================================================
-- Exercício 1 — Banco relacional (SQL básico)
-- Bootcamp Orion (New Rizon)
-- ============================================================

-- 1. Criação da tabela 'cursos'
CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

-- 2. Criação da tabela 'alunos' com chave estrangeira (FK)
CREATE TABLE IF NOT EXISTS alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    curso_id INTEGER NOT NULL,
    CONSTRAINT fk_aluno_curso FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- 3. Inserção de dados de teste na tabela 'cursos'
INSERT INTO cursos (nome_curso) VALUES
    ('Desenvolvimento Web'),
    ('Ciência de Dados'),
    ('Inteligência Artificial');

-- 4. Inserção de dados de teste na tabela 'alunos' (relacionando com os cursos criados)
INSERT INTO alunos (nome, email, curso_id) VALUES
    ('João Silva', 'joao.silva@email.com', 1),
    ('Maria Santos', 'maria.santos@email.com', 1),
    ('Carlos Eduardo', 'carlos.eduardo@email.com', 2),
    ('Ana Beatriz', 'ana.beatriz@email.com', 3);

-- 5. Consulta para verificar todos os alunos inseridos
SELECT * FROM alunos;

-- 6. Teste de integridade referencial (deve falhar pois o curso_id 999 não existe)
-- Descomente a linha abaixo para validar a restrição da chave estrangeira:
-- INSERT INTO alunos (nome, email, curso_id) VALUES ('Aluno Inválido', 'invalido@email.com', 999);

