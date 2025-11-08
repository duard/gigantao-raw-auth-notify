import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfptcEntity } from './tGFPTC.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfmsiEntity } from './tGFMSI.entity';

@Index('PK_TGFEPP', ['codprod', 'numeq', 'sequencia'], { unique: true })
@Entity('TGFEPP', { schema: 'SANKHYA' })
export class TgfeppEntity {
  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'PARADA', length: 1, default: () => "'N'" })
  parada: string;

  @Column('int', { name: 'TEMPOESTIMADO', nullable: true })
  tempoestimado: number | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'MINIMO', precision: 53, default: () => '(0)' })
  minimo: number;

  @Column('float', { name: 'MAXIMO', precision: 53, default: () => '(0)' })
  maximo: number;

  @Column('varchar', { name: 'MULTIPLO', length: 1, default: () => "'N'" })
  multiplo: string;

  @Column('smallint', { name: 'PERIODICIDADE', default: () => '(0)' })
  periodicidade: number;

  @Column('float', { name: 'LIMITE', precision: 53, default: () => '(0)' })
  limite: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfepps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfptcEntity, (tgfptcEntity) => tgfptcEntity.tgfepps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPTC', referencedColumnName: 'codptc' }])
  codptc: TgfptcEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfepps)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfepps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgfepps)
  @JoinColumn([{ name: 'NUMEQ', referencedColumnName: 'numeq' }])
  numeq2: TgfmeqEntity;

  @OneToMany(() => TgfmsiEntity, (tgfmsiEntity) => tgfmsiEntity.tgfepp)
  tgfmsis: TgfmsiEntity[];
}
