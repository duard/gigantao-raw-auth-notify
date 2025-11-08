import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcspepEntity } from './tCSPEP.entity';
import { TgpperEntity } from './tGPPER.entity';
import { TpqaneEntity } from './tPQANE.entity';
import { TpqdpdEntity } from './tPQDPD.entity';
import { TpqpeqEntity } from './tPQPEQ.entity';
import { TpqgrpEntity } from './tPQGRP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TpqresEntity } from './tPQRES.entity';
import { TpqrpeEntity } from './tPQRPE.entity';

@Index('PK_TPQPER', ['codperg'], { unique: true })
@Index('TPQPER_I01', ['codpergtab'], {})
@Entity('TPQPER', { schema: 'SANKHYA' })
export class TpqperEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('text', { name: 'DESCRPERG' })
  descrperg: string;

  @Column('varchar', {
    name: 'INSTRUCAOAPLICADOR',
    nullable: true,
    length: 200,
  })
  instrucaoaplicador: string | null;

  @Column('int', { name: 'QTDMAXLINHAS' })
  qtdmaxlinhas: number;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'0'" })
  tipo: string;

  @Column('int', { name: 'QTDMAXESCOLHAS', nullable: true })
  qtdmaxescolhas: number | null;

  @Column('int', { name: 'NROTENTATIVAS' })
  nrotentativas: number;

  @Column('varchar', {
    name: 'PERMITEANEXO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  permiteanexo: string | null;

  @Column('float', { name: 'TEMPOPARARESPOSTA', nullable: true, precision: 53 })
  tempopararesposta: number | null;

  @Column('varchar', {
    name: 'ACEITAOBSERVACAO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  aceitaobservacao: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { name: 'CODPERGTAB', nullable: true })
  codpergtab: number | null;

  @Column('int', { name: 'ORDEMTAB', nullable: true })
  ordemtab: number | null;

  @Column('float', { name: 'PENALIDADE', nullable: true, precision: 53 })
  penalidade: number | null;

  @Column('varchar', { name: 'OBRIGATORIA', length: 1, default: () => "'N'" })
  obrigatoria: string;

  @Column('char', { name: 'PERMITEFILTRAR', length: 1, default: () => "'N'" })
  permitefiltrar: string;

  @OneToMany(() => TcspepEntity, (tcspepEntity) => tcspepEntity.codperg)
  tcspeps: TcspepEntity[];

  @OneToMany(() => TgpperEntity, (tgpperEntity) => tgpperEntity.codperg)
  tgppers: TgpperEntity[];

  @OneToMany(() => TpqaneEntity, (tpqaneEntity) => tpqaneEntity.codperg2)
  tpqanes: TpqaneEntity[];

  @OneToMany(() => TpqdpdEntity, (tpqdpdEntity) => tpqdpdEntity.codpergmestre2)
  tpqdpds: TpqdpdEntity[];

  @OneToMany(() => TpqdpdEntity, (tpqdpdEntity) => tpqdpdEntity.codpergdep2)
  tpqdpds2: TpqdpdEntity[];

  @OneToMany(() => TpqpeqEntity, (tpqpeqEntity) => tpqpeqEntity.codperg2)
  tpqpeqs: TpqpeqEntity[];

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqpers)
  @JoinColumn([{ name: 'CODPERGTAB', referencedColumnName: 'codperg' }])
  codpergtab2: TpqperEntity;

  @OneToMany(() => TpqperEntity, (tpqperEntity) => tpqperEntity.codpergtab2)
  tpqpers: TpqperEntity[];

  @ManyToOne(() => TpqgrpEntity, (tpqgrpEntity) => tpqgrpEntity.tpqpers)
  @JoinColumn([{ name: 'CODGRUPOPERG', referencedColumnName: 'codgrupoperg' }])
  codgrupoperg: TpqgrpEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqpers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TpqresEntity, (tpqresEntity) => tpqresEntity.codperg2)
  tpqres: TpqresEntity[];

  @OneToMany(() => TpqrpeEntity, (tpqrpeEntity) => tpqrpeEntity.codperg2)
  tpqrpes: TpqrpeEntity[];
}
