import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcat42Entity } from './tGFCAT42.entity';

@Index('PK_TGFCAT42R0000', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFCAT42R0000', { schema: 'SANKHYA' })
export class Tgfcat42R0000Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { primary: true, name: 'REG', length: 4 })
  reg: string;

  @Column('datetime', { name: 'PERIODO', nullable: true })
  periodo: Date | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 250 })
  nome: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'IE', nullable: true, length: 14 })
  ie: string | null;

  @Column('int', { name: 'CODMUN', nullable: true })
  codmun: number | null;

  @Column('smallint', { name: 'CODVER', nullable: true })
  codver: number | null;

  @Column('smallint', { name: 'CODFIN', nullable: true })
  codfin: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => Tgfcat42Entity,
    (tgfcat42Entity) => tgfcat42Entity.tgfcat42R0s,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfcat: Tgfcat42Entity;
}
