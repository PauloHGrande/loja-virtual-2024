package com.fantasma.backend.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.entity.Permissao;
import com.fantasma.backend.entity.PermissaoPessoa;
import com.fantasma.backend.entity.Pessoa;
import com.fantasma.backend.repository.PermissaoPessoaRepository;
import com.fantasma.backend.repository.PermissaoRepository;

@Service
public class PermissaoPessoaService {

	@Autowired
	private PermissaoPessoaRepository permissaoPessoaRepository;
	
	@Autowired 
	private PermissaoRepository permissaoRepository;
	
	public void vincularPessoaPermissaoCliente(Pessoa pessoa) {
		List<Permissao> listaPermissao = permissaoRepository.findByNome("cliente");
		if(listaPermissao.size()>0) {
			PermissaoPessoa permissaoPessoa = new PermissaoPessoa();
			permissaoPessoa.setPessoa(pessoa);
			permissaoPessoa.setPermissao(listaPermissao.get(0));
			permissaoPessoa.setDataCriacao(new Date());
			permissaoPessoaRepository.saveAndFlush(permissaoPessoa);
		}
	}
}
