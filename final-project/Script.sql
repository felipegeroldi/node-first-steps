-- Estrutura da tabela `tasks`
CREATE TABLE `tasks` (
`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(10) NOT NULL,
`description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Estrutura da tabela `users`
CREATE TABLE `users` (
`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`username` varchar(20) NOT NULL,
`password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;