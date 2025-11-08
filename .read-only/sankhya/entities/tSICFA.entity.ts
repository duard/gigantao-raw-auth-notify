import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSICFA', ['codfil'], { unique: true })
@Entity('TSICFA', { schema: 'SANKHYA' })
export class TsicfaEntity {
  @Column('int', { primary: true, name: 'CODFIL' })
  codfil: number;

  @Column('int', { name: 'NUINSTANCIA', nullable: true })
  nuinstancia: number | null;

  @Column('varchar', { name: 'NOMEFILTRO', nullable: true, length: 100 })
  nomefiltro: string | null;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('int', { name: 'AUTOR', nullable: true })
  autor: number | null;

  @Column('datetime', { name: 'DTCRIACAO', nullable: true })
  dtcriacao: Date | null;

  @Column('int', { name: 'ALTERADOPOR', nullable: true })
  alteradopor: number | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 100 })
  observacao: string | null;

  @ManyToMany(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsicfas)
  @JoinTable({
    name: 'TSIUFA',
    joinColumns: [{ name: 'CODFIL', referencedColumnName: 'codfil' }],
    inverseJoinColumns: [{ name: 'CODUSU', referencedColumnName: 'codusu' }],
    schema: 'SANKHYA',
  })
  tsiusus: TsiusuEntity[];
}
