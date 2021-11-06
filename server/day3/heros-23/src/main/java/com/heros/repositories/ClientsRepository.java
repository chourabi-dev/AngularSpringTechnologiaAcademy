package com.heros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heros.entitys.Clients;

public interface ClientsRepository extends JpaRepository<Clients,Long> {

}
