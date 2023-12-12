package com.fantasma.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.entity.Categoria;
import com.fantasma.backend.repository.CategoriaRepository;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public List<Categoria> bucarTodos() {
		return categoriaRepository.findAll();
	}
	
	public Categoria inserir(Categoria categoria) {
		categoria.setDataCriacao(new Date());
		return categoriaRepository.saveAndFlush(categoria);
	}
	
	public Categoria alterar(Categoria categoria) {
		categoria.setDataAtualizacao(new Date());
		return categoriaRepository.saveAndFlush(categoria);
	}
	
	public void excluir(Long id) {
		Categoria categoria = categoriaRepository.findById(id).get();
		categoriaRepository.delete(categoria);
	}
}
