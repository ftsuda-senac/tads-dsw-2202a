package br.senac.tads.dsw.exemplosspring.produto;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
    Page<Produto> findDistinctByCategorias_IdIn(List<Integer> idsCat, Pageable page);
    
    @Query(nativeQuery = true, value = "select * from produto p inner join produto_categoria pc on p.id = pc.produto_id where pc.categoria_id in (:idsCat)")
    List<Produto> findBlabla(List<Integer> idsCat);

}
