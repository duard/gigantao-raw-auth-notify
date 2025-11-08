import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqperEntity } from './tPQPER.entity';
import { TpqpesEntity } from './tPQPES.entity';

@Index('PK_TPQANE', ['nupesq', 'codperg', 'sequencia'], { unique: true })
@Entity('TPQANE', { schema: 'SANKHYA' })
export class TpqaneEntity {
  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 255 })
  nomearquivo: string | null;

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqanes)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TpqperEntity;

  @ManyToOne(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tpqanes)
  @JoinColumn([{ name: 'NUPESQ', referencedColumnName: 'nupesq' }])
  nupesq2: TpqpesEntity;
}
