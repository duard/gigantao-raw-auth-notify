import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSERRLT', ['nuconsulta'], { unique: true })
@Entity('TSERRLT', { schema: 'SANKHYA' })
export class TserrltEntity {
  @Column('int', { primary: true, name: 'NUCONSULTA' })
  nuconsulta: number;

  @Column('datetime', { name: 'DATAULTATCS', nullable: true })
  dataultatcs: Date | null;

  @Column('float', { name: 'VRCAPSOCCS', nullable: true, precision: 53 })
  vrcapsoccs: number | null;

  @Column('float', { name: 'VRCAPREACS', nullable: true, precision: 53 })
  vrcapreacs: number | null;

  @Column('float', { name: 'VRCAPAUTCS', nullable: true, precision: 53 })
  vrcapautcs: number | null;

  @Column('varchar', { name: 'DESCDNACS', nullable: true, length: 12 })
  descdnacs: string | null;

  @Column('varchar', { name: 'DESCDCRAOCS', nullable: true, length: 12 })
  descdcraocs: string | null;

  @Column('varchar', { name: 'DESCPARCS', nullable: true, length: 12 })
  descparcs: string | null;

  @Column('varchar', { name: 'TIPRETCS', nullable: true, length: 1 })
  tipretcs: string | null;

  @Column('datetime', { name: 'DHRISKSCO', nullable: true })
  dhrisksco: Date | null;

  @Column('float', { name: 'FATORRISKSCO', nullable: true, precision: 53 })
  fatorrisksco: number | null;

  @Column('float', { name: 'VLFATP', nullable: true, precision: 53 })
  vlfatp: number | null;

  @Column('smallint', { name: 'FATPRESPONTOS', nullable: true })
  fatprespontos: number | null;

  @Column('datetime', { name: 'LIMCREDDHCALCULO', nullable: true })
  limcreddhcalculo: Date | null;

  @Column('float', { name: 'LIMCREDVALOR', nullable: true, precision: 53 })
  limcredvalor: number | null;

  @Column('varchar', { name: 'LIMCREDOBS', nullable: true, length: 395 })
  limcredobs: string | null;

  @Column('varchar', { name: 'FRASEALERTA', nullable: true, length: 124 })
  frasealerta: string | null;

  @Column('datetime', { name: 'DATAALERTA', nullable: true })
  dataalerta: Date | null;

  @Column('smallint', { name: 'IDPJPONTUACAO', nullable: true })
  idpjpontuacao: number | null;

  @Column('varchar', { name: 'IDPJMENSPROD', nullable: true, length: 100 })
  idpjmensprod: string | null;

  @Column('varchar', { name: 'IDPJFRASE', nullable: true, length: 100 })
  idpjfrase: string | null;

  @Column('varchar', { name: 'IDPJVISAO', nullable: true, length: 4 })
  idpjvisao: string | null;

  @Column('int', { name: 'IRCPONTUACAO', nullable: true })
  ircpontuacao: number | null;

  @Column('varchar', { name: 'IRCCLASSE', nullable: true, length: 1 })
  ircclasse: string | null;

  @Column('varchar', { name: 'IRCINTERPRETACAO', nullable: true, length: 80 })
  ircinterpretacao: string | null;

  @Column('int', { name: 'IRCCODMENSAGEM', nullable: true })
  irccodmensagem: number | null;

  @Column('varchar', { name: 'IRCMENSAGEM', nullable: true, length: 80 })
  ircmensagem: string | null;

  @Column('varchar', { name: 'IRMVALOR', nullable: true, length: 2 })
  irmvalor: string | null;

  @Column('int', { name: 'RCSFATOR', nullable: true })
  rcsfator: number | null;

  @Column('float', { name: 'RCSPRINY', nullable: true, precision: 53 })
  rcspriny: number | null;

  @Column('varchar', { name: 'RCSMSGFRASE', nullable: true, length: 100 })
  rcsmsgfrase: string | null;

  @Column('varchar', { name: 'FATPRESMSG', nullable: true, length: 100 })
  fatpresmsg: string | null;

  @Column('varchar', { name: 'IRMFRASE', nullable: true, length: 100 })
  irmfrase: string | null;

  @Column('datetime', { name: 'IRMDTATUALIZACAO', nullable: true })
  irmdtatualizacao: Date | null;

  @Column('float', { name: 'FATPRESFAIXADE', nullable: true, precision: 53 })
  fatpresfaixade: number | null;

  @Column('float', { name: 'FATPRESFAIXAATE', nullable: true, precision: 53 })
  fatpresfaixaate: number | null;

  @Column('varchar', { name: 'FATPRESFRASENCALC', nullable: true, length: 395 })
  fatpresfrasencalc: string | null;

  @Column('varchar', { name: 'CODIGODERETORNO', nullable: true, length: 2 })
  codigoderetorno: string | null;

  @Column('varchar', { name: 'MENSAGEMCONFIE', nullable: true, length: 80 })
  mensagemconfie: string | null;

  @Column('varchar', { name: 'MENSAGEMGERENCIE', nullable: true, length: 80 })
  mensagemgerencie: string | null;
}
