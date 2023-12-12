package com.fantasma.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.entity.Produto;
import com.fantasma.backend.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	public List<Produto> bucarTodos() {
		return produtoRepository.findAll();
	}
	
	public Produto inserir(Produto produto) {
		produto.setDataCriacao(new Date());
		return produtoRepository.saveAndFlush(produto);
	}
	
	public Produto alterar(Produto produto) {
		produto.setDataAtualizacao(new Date());
		return produtoRepository.saveAndFlush(produto);
	}
	
	public void excluir(Long id) {
		Produto produto = produtoRepository.findById(id).get();
		produtoRepository.delete(produto);
	}
}
