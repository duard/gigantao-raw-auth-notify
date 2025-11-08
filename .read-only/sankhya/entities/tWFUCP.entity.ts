import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFUCP', ['codprn', 'idelemento', 'sequencia'], { unique: true })
@Index('TWFUCP_IDX_001', ['codprn', 'ativo', 'idelemento'], {})
@Entity('TWFUCP', { schema: 'SANKHYA' })
export class TwfucpEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('varchar', { primary: true, name: 'IDELEMENTO', length: 100 })
  idelemento: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('int', { name: 'CODGRUPOUSU', nullable: true })
  codgrupousu: number | null;

  @Column('varchar', { name: 'EXPRESSAO', nullable: true, length: 3103 })
  expressao: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'CODEQUIPE', nullable: true })
  codequipe: number | null;

  @Column('varchar', { name: 'DINAMICO', nullable: true, length: 1 })
  dinamico: string | null;

  @Column('int', { name: 'IDINSTPRN', nullable: true })
  idinstprn: number | null;

  @Column('int', { name: 'IDINSTTAR', nullable: true })
  idinsttar: number | null;
}
