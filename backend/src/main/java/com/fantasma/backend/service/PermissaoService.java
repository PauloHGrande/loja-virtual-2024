package com.fantasma.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.entity.Permissao;
import com.fantasma.backend.repository.PermissaoRepository;

@Service
public class PermissaoService {

	@Autowired
	private PermissaoRepository permissaoRepository;
	
	public List<Permissao> bucarTodos() {
		return permissaoRepository.findAll();
	}
	
	public Permissao inserir(Permissao permissao) {
		permissao.setDataCriacao(new Date());
		return permissaoRepository.saveAndFlush(permissao);
	}
	
	public Permissao alterar(Permissao permissao) {
		permissao.setDataAtualizacao(new Date());
		return permissaoRepository.saveAndFlush(permissao);
	}
	
	public void excluir(Long id) {
		Permissao permissao = permissaoRepository.findById(id).get();
		permissaoRepository.delete(permissao);
	}
}
