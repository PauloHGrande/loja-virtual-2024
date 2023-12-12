package com.fantasma.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fantasma.backend.entity.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Long>{

}
