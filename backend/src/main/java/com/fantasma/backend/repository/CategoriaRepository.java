package com.fantasma.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fantasma.backend.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
