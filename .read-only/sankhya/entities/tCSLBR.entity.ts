import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcslbpEntity } from './tCSLBP.entity';

@Index('PK_TCSLBR', ['nufap', 'codreq', 'sequencia'], { unique: true })
@Entity('TCSLBR', { schema: 'SANKHYA' })
export class TcslbrEntity {
  @Column('int', { primary: true, name: 'CODREQ' })
  codreq: number;

  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 60 })
  nome: string | null;

  @Column('text', { name: 'DESCRICAO', nullable: true })
  descricao: string | null;

  @Column('text', { name: 'CASOUSO', nullable: true })
  casouso: string | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('char', {
    name: 'TODAETAPA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  todaetapa: string | null;

  @ManyToOne(() => TcslbpEntity, (tcslbpEntity) => tcslbpEntity.tcslbrs)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tcslbp: TcslbpEntity;
}
