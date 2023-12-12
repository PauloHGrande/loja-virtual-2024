package com.fantasma.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.entity.Pessoa;
import com.fantasma.backend.repository.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository pessoaRepository;
	
	public List<Pessoa> bucarTodos() {
		return pessoaRepository.findAll();
	}
	
	public Pessoa inserir(Pessoa pessoa) {
		pessoa.setDataCriacao(new Date());
		return pessoaRepository.saveAndFlush(pessoa);
	}
	
	public Pessoa alterar(Pessoa pessoa) {
		pessoa.setDataAtualizacao(new Date());
		return pessoaRepository.saveAndFlush(pessoa);
	}
	
	public void excluir(Long id) {
		Pessoa pessoa = pessoaRepository.findById(id).get();
		pessoaRepository.delete(pessoa);
	}
}
