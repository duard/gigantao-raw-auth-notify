import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TpqdpdEntity } from './tPQDPD.entity';
import { TpqperEntity } from './tPQPER.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TpqrpeEntity } from './tPQRPE.entity';

@Index('PK_TPQRES', ['codresp', 'codperg'], { unique: true })
@Entity('TPQRES', { schema: 'SANKHYA' })
export class TpqresEntity {
  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODRESP' })
  codresp: number;

  @Column('text', { name: 'DESCRRESP' })
  descrresp: string;

  @Column('int', { name: 'TAMANHOMAX', nullable: true })
  tamanhomax: number | null;

  @Column('float', { name: 'VALORMAX', nullable: true, precision: 53 })
  valormax: number | null;

  @Column('float', { name: 'VALORMIN', nullable: true, precision: 53 })
  valormin: number | null;

  @Column('float', { name: 'NOTA', precision: 53, default: () => '(0)' })
  nota: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('float', { name: 'PENALIDADE', nullable: true, precision: 53 })
  penalidade: number | null;

  @Column('smallint', { name: 'SEQAGRUPA', nullable: true })
  seqagrupa: number | null;

  @Column('varchar', { name: 'ACEITAOBSERVACAO', nullable: true, length: 1 })
  aceitaobservacao: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 255 })
  nomearquivo: string | null;

  @Column('varchar', { name: 'PADRAO', nullable: true, length: 1 })
  padrao: string | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'LIMPAAGRUPA', nullable: true, length: 50 })
  limpaagrupa: string | null;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TpqdpdEntity, (tpqdpdEntity) => tpqdpdEntity.tpqres)
  tpqdpds: TpqdpdEntity[];

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqres)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TpqperEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqres)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TpqrpeEntity, (tpqrpeEntity) => tpqrpeEntity.tpqres)
  tpqrpes: TpqrpeEntity[];
}
