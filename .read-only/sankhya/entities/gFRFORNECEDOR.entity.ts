import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GfrfindespesaEntity } from './gFRFINDESPESA.entity';

@Index('PK__GFRFORNE__3214EC2731CBD808', ['id'], { unique: true })
@Entity('GFRFORNECEDOR', { schema: 'SANKHYA' })
export class GfrfornecedorEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NOME', length: 200 })
  nome: string;

  @Column('varchar', { name: 'NOMECONTATO', nullable: true, length: 200 })
  nomecontato: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 16 })
  telefone: string | null;

  @Column('varchar', { name: 'ENDERECO', nullable: true, length: 400 })
  endereco: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 200 })
  email: string | null;

  @OneToMany(
    () => GfrfindespesaEntity,
    (gfrfindespesaEntity) => gfrfindespesaEntity.fornecedor,
  )
  gfrfindespesas: GfrfindespesaEntity[];
}
