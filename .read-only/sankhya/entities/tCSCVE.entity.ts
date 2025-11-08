import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsoseEntity } from './tCSOSE.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TCSCVE', ['numcontrato', 'codveiculo', 'sequencia'], {
  unique: true,
})
@Index('TCSCVE_I01', ['numosinstal'], {})
@Index('TCSCVE_I02', ['numosdesinstal'], {})
@Entity('TCSCVE', { schema: 'SANKHYA' })
export class TcscveEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'NUMOSINSTAL', nullable: true })
  numosinstal: number | null;

  @Column('datetime', { name: 'DTINSTAL', nullable: true })
  dtinstal: Date | null;

  @Column('int', { name: 'NUMOSDESINSTAL', nullable: true })
  numosdesinstal: number | null;

  @Column('datetime', { name: 'DTDESINSTAL', nullable: true })
  dtdesinstal: Date | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcscves)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcscves)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcscves)
  @JoinColumn([{ name: 'NUMOSDESINSTAL', referencedColumnName: 'numos' }])
  numosdesinstal2: TcsoseEntity;

  @ManyToOne(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcscves2)
  @JoinColumn([{ name: 'NUMOSINSTAL', referencedColumnName: 'numos' }])
  numosinstal2: TcsoseEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcscves, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tcscves)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
