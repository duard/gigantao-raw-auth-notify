import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { Tgfcat42Entity } from './tGFCAT42.entity';

@Index(
  'PK_TGFCAT42R0150',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'codparc'],
  { unique: true },
)
@Entity('TGFCAT42R0150', { schema: 'SANKHYA' })
export class Tgfcat42R0150Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', { primary: true, name: 'REG', length: 4 })
  reg: string;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 100 })
  nome: string | null;

  @Column('smallint', { name: 'CODPAISFIS', nullable: true })
  codpaisfis: number | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'IE', nullable: true, length: 14 })
  ie: string | null;

  @Column('int', { name: 'CODMUNFIS', nullable: true })
  codmunfis: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcat42R0s)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(
    () => Tgfcat42Entity,
    (tgfcat42Entity) => tgfcat42Entity.tgfcat42R0s2,
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
