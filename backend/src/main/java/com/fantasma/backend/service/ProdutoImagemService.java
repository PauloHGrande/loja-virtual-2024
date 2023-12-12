package com.fantasma.backend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fantasma.backend.entity.Produto;
import com.fantasma.backend.entity.ProdutoImagem;
import com.fantasma.backend.repository.ProdutoImagemRepository;
import com.fantasma.backend.repository.ProdutoRepository;

@Service
public class ProdutoImagemService {

	@Autowired
	private ProdutoImagemRepository produtoImagemRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public List<ProdutoImagem> bucarTodos() {
		return produtoImagemRepository.findAll();
	}
	
	public ProdutoImagem inserir(Long idProduto, MultipartFile file) {
		Produto produto = produtoRepository.findById(idProduto).get();
		ProdutoImagem imagem = new ProdutoImagem();
		try {
			if(!file.isEmpty()) {
				byte[] bytes = file.getBytes();
				String nomeImagem = String.valueOf(produto.getId()) + file.getOriginalFilename();
				Path caminho = Paths.get("C:/Projetos/Sistema-Vendas/Images/" + nomeImagem);
				Files.write(caminho, bytes);
				imagem.setNome(nomeImagem);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}		
		imagem.setProduto(produto);
		imagem.setDataCriacao(new Date());
		return produtoImagemRepository.saveAndFlush(imagem);
	}
	
	public ProdutoImagem alterar(ProdutoImagem produtoImagem) {
		produtoImagem.setDataAtualizacao(new Date());
		return produtoImagemRepository.saveAndFlush(produtoImagem);
	}
	
	public void excluir(Long id) {
		ProdutoImagem produtoImagem = produtoImagemRepository.findById(id).get();
		produtoImagemRepository.delete(produtoImagem);
	}
}
