-- ============================================================
-- Exercício 2 — Banco relacional (JOINs e filtros)
-- Bootcamp Orion (New Rizon)
-- ============================================================

-- Inserir um curso extra sem nenhum aluno para demonstrar o exercício avançado (LEFT JOIN)
INSERT INTO cursos (nome_curso) VALUES ('Engenharia de Software');

-- 1. Consulta com INNER JOIN para exibir o nome do aluno e o nome do curso correspondente
SELECT 
    alunos.nome AS nome_aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id;

-- 2. Consulta com WHERE e INNER JOIN para filtrar apenas alunos de 'Desenvolvimento Web'
SELECT 
    alunos.nome AS nome_aluno,
    alunos.email,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE cursos.nome_curso = 'Desenvolvimento Web';

-- 3. Execução de UPDATE: Mover a aluna 'Maria Santos' para o curso de 'Ciência de Dados'
UPDATE alunos
SET curso_id = (SELECT id FROM cursos WHERE nome_curso = 'Ciência de Dados')
WHERE nome = 'Maria Santos';

-- 3.1. Consulta após o UPDATE para comprovar que a Maria Santos agora está em 'Ciência de Dados'
SELECT 
    alunos.nome AS nome_aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE alunos.nome = 'Maria Santos';

-- 4. Extra (avançado): SELECT com LEFT JOIN e WHERE para encontrar cursos sem nenhum aluno matriculado
SELECT 
    cursos.id AS curso_id,
    cursos.nome_curso AS curso_sem_alunos
FROM cursos
LEFT JOIN alunos ON cursos.id = alunos.curso_id
WHERE alunos.id IS NULL;

