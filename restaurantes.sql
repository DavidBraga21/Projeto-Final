-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/11/2023 às 21:43
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mesafacil`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `restaurantes`
--

CREATE TABLE `restaurantes` (
  `id` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  `imagem` text NOT NULL,
  `nome` text NOT NULL,
  `bairro` text NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `restaurantes`
--

INSERT INTO `restaurantes` (`id`, `nota`, `imagem`, `nome`, `bairro`, `descricao`) VALUES
(1, 5, 'https://www.segueviagem.com.br/wp-content/uploads/2019/11/gabbiano2-2.jpg', 'Gabbiano', 'Barra da Tijuca', 'Restaurante moderno com o selo Ospitalità Italiana que serve pratos gourmet tradicionais e criativos'),
(2, 4, 'https://casatua.com.br/wp-content/uploads/2022/07/foto-curina.png', 'Casa tua', 'Barra da Tijuca', 'Nosso foco é a autêntica cucina italiana. É fazer com que os nossos clientes registrem no Casa Tua os seus momentos. Com a culinária que é um afeto que conforta a alma. É paixão!!!'),
(3, 4, 'https://media-cdn.tripadvisor.com/media/photo-s/2a/40/fa/e9/o-isabel-lounge-e-o-novo.jpg', 'Isabel Lounge', 'Copacabana', 'Drinks criativos e gastronomia brasileira contemporânea para curtir com os amigos em frente à praia mais famosa do mundo.\r\n\r\nVista ampla do horizonte, e orla de Copacabana, e dos principais pontos turísticos da cidade.'),
(4, 5, 'https://www.bhshopping.com.br/sites/bhs/files/styles/loja670x455/public/lojas/pobre_juan.jpg?itok=XGyreAfy', 'Pobre Juan', 'Barra da Tijuca', 'Inspirado nas típicas casas argentinas, o restaurante Pobre Juan é uma das mais conceituadas casas de carnes no país e ficou famoso por sua parrilla (grelha argentina) premium, cortes de carnes nobres especialmente selecionados, excelência na carta de vinhos e seu ofurô de cervejas.');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `restaurantes`
--
ALTER TABLE `restaurantes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `restaurantes`
--
ALTER TABLE `restaurantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
