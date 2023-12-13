package com.fantasma.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fantasma.backend.entity.Pessoa;

public interface PessoaClienteRepository extends JpaRepository<Pessoa, Long>{

}
