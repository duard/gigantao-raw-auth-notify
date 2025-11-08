import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgpqueEntity } from './tGPQUE.entity';
import { TpqavdEntity } from './tPQAVD.entity';
import { TpqdplEntity } from './tPQDPL.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TpqqueEntity } from './tPQQUE.entity';
import { TsismtpEntity } from './tSISMTP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TPQPLA', ['nupla'], { unique: true })
@Entity('TPQPLA', { schema: 'SANKHYA' })
export class TpqplaEntity {
  @Column('int', { primary: true, name: 'NUPLA' })
  nupla: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 200 })
  descricao: string | null;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('varchar', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  status: string | null;

  @Column('varchar', {
    name: 'FORMADEAPLICAR',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  formadeaplicar: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'MODELOEMAIL', nullable: true })
  modeloemail: string | null;

  @Column('varchar', { name: 'ASSUNTO', nullable: true, length: 60 })
  assunto: string | null;

  @Column('varchar', { name: 'ASSUNTOEMAIL', nullable: true, length: 60 })
  assuntoemail: string | null;

  @Column('int', { name: 'MAXENVIO', nullable: true })
  maxenvio: number | null;

  @Column('int', { name: 'INTERVALOENVIO', nullable: true })
  intervaloenvio: number | null;

  @Column('smallint', { name: 'CODUSUAVALIADOR', nullable: true })
  codusuavaliador: number | null;

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.nuplaavaliado)
  tgpques: TgpqueEntity[];

  @OneToMany(() => TgpqueEntity, (tgpqueEntity) => tgpqueEntity.nupla)
  tgpques2: TgpqueEntity[];

  @OneToMany(() => TpqavdEntity, (tpqavdEntity) => tpqavdEntity.nupla2)
  tpqavds: TpqavdEntity[];

  @OneToMany(() => TpqavdEntity, (tpqavdEntity) => tpqavdEntity.nuplaavaliado2)
  tpqavds2: TpqavdEntity[];

  @OneToMany(() => TpqdplEntity, (tpqdplEntity) => tpqdplEntity.nupla2)
  tpqdpls: TpqdplEntity[];

  @OneToMany(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.nupla)
  tpqpes: TpqpesEntity[];

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tpqplas)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest: TpqqueEntity;

  @ManyToOne(() => TsismtpEntity, (tsismtpEntity) => tsismtpEntity.tpqplas)
  @JoinColumn([{ name: 'CODSMTP', referencedColumnName: 'codsmtp' }])
  codsmtp: TsismtpEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tpqplas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqplas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
