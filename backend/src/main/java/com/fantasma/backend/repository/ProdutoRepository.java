package com.fantasma.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fantasma.backend.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
