import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TriaqprEntity } from './tRIAQPR.entity';
import { TricpprEntity } from './tRICPPR.entity';
import { TricprbEntity } from './tRICPRB.entity';
import { TrifepEntity } from './tRIFEP.entity';
import { TriicrEntity } from './tRIICR.entity';
import { TripajrEntity } from './tRIPAJR.entity';
import { TripniEntity } from './tRIPNI.entity';
import { TrippfEntity } from './tRIPPF.entity';
import { TrippjEntity } from './tRIPPJ.entity';
import { TrircspEntity } from './tRIRCSP.entity';
import { TrircstEntity } from './tRIRCST.entity';
import { TrireadEntity } from './tRIREAD.entity';
import { TrirepEntity } from './tRIREP.entity';
import { TriresEntity } from './tRIRES.entity';
import { TrirradEntity } from './tRIRRAD.entity';
import { TrirrcEntity } from './tRIRRC.entity';
import { TritelEntity } from './tRITEL.entity';

@Index('PK_TRICAB', ['codemp', 'dtref', 'tpamb'], { unique: true })
@Entity('TRICAB', { schema: 'SANKHYA' })
export class TricabEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('char', { name: 'CONTROLE', length: 1, default: () => "'I'" })
  controle: string;

  @Column('smallint', { name: 'SEQUENCIAATUAL', nullable: true })
  sequenciaatual: number | null;

  @Column('smallint', { name: 'EVTPENDENTE', nullable: true })
  evtpendente: number | null;

  @Column('smallint', { name: 'EVTENVIADO', nullable: true })
  evtenviado: number | null;

  @Column('smallint', { name: 'EVTAGUARCORRECAO', nullable: true })
  evtaguarcorrecao: number | null;

  @Column('smallint', { name: 'EVTFINALIZADO', nullable: true })
  evtfinalizado: number | null;

  @Column('smallint', { name: 'EVTERROEVTPRIOR', nullable: true })
  evterroevtprior: number | null;

  @Column('smallint', { name: 'EVTTOTAIS', nullable: true })
  evttotais: number | null;

  @Column('smallint', { name: 'STATUS', default: () => '(0)' })
  status: number;

  @Column('smallint', { name: 'VERSAOLAYOUT', nullable: true })
  versaolayout: number | null;

  @Column('smallint', { name: 'STATUS_GRUPO3103', default: () => '(0)' })
  statusGrupo3103: number;

  @Column('smallint', { name: 'SEQUENCIAATUAL3103', nullable: true })
  sequenciaatual3103: number | null;

  @OneToMany(() => TriaqprEntity, (triaqprEntity) => triaqprEntity.tricab)
  triaqprs: TriaqprEntity[];

  @OneToMany(() => TricpprEntity, (tricpprEntity) => tricpprEntity.tricab)
  tricpprs: TricpprEntity[];

  @OneToMany(() => TricprbEntity, (tricprbEntity) => tricprbEntity.tricab)
  tricprbs: TricprbEntity[];

  @OneToMany(() => TrifepEntity, (trifepEntity) => trifepEntity.tricab)
  trifeps: TrifepEntity[];

  @OneToMany(() => TriicrEntity, (triicrEntity) => triicrEntity.tricab)
  triicrs: TriicrEntity[];

  @OneToMany(() => TripajrEntity, (tripajrEntity) => tripajrEntity.tricab)
  tripajrs: TripajrEntity[];

  @OneToMany(() => TripniEntity, (tripniEntity) => tripniEntity.tricab)
  tripnis: TripniEntity[];

  @OneToMany(() => TrippfEntity, (trippfEntity) => trippfEntity.tricab)
  trippfs: TrippfEntity[];

  @OneToMany(() => TrippjEntity, (trippjEntity) => trippjEntity.tricab)
  trippjs: TrippjEntity[];

  @OneToMany(() => TrircspEntity, (trircspEntity) => trircspEntity.tricab)
  trircsps: TrircspEntity[];

  @OneToMany(() => TrircstEntity, (trircstEntity) => trircstEntity.tricab)
  trircsts: TrircstEntity[];

  @OneToMany(() => TrireadEntity, (trireadEntity) => trireadEntity.tricab)
  trireads: TrireadEntity[];

  @OneToMany(() => TrirepEntity, (trirepEntity) => trirepEntity.tricab)
  trireps: TrirepEntity[];

  @OneToMany(() => TriresEntity, (triresEntity) => triresEntity.tricab)
  trires: TriresEntity[];

  @OneToMany(() => TrirradEntity, (trirradEntity) => trirradEntity.tricab)
  trirrads: TrirradEntity[];

  @OneToMany(() => TrirrcEntity, (trirrcEntity) => trirrcEntity.tricab)
  trirrcs: TrirrcEntity[];

  @OneToMany(() => TritelEntity, (tritelEntity) => tritelEntity.tricab)
  tritels: TritelEntity[];
}
