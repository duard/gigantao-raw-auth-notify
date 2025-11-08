import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWAEEDOC', ['codaeedoc', 'nunota'], { unique: true })
@Entity('TGWAEEDOC', { schema: 'SANKHYA' })
export class TgwaeedocEntity {
  @Column('int', { primary: true, name: 'CODAEEDOC' })
  codaeedoc: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'NUMNOTA', nullable: true })
  numnota: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('varchar', { name: 'NOMEFANTASIA', nullable: true, length: 40 })
  nomefantasia: string | null;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('int', { name: 'CODREG', nullable: true })
  codreg: number | null;

  @Column('int', { name: 'CODPARCTRANSP', nullable: true })
  codparctransp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'NOMEPARC', nullable: true, length: 40 })
  nomeparc: string | null;
}
