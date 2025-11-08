import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgftpeEntity } from './tGFTPE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TgfpeiEntity } from './tGFPEI.entity';

@Index('PK_TGFPEC', ['nupesagem'], { unique: true })
@Index('TGFPEC_01', ['nunota'], {})
@Entity('TGFPEC', { schema: 'SANKHYA' })
export class TgfpecEntity {
  @Column('int', { primary: true, name: 'NUPESAGEM' })
  nupesagem: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'T'" })
  status: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpecs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfpecs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgftpeEntity, (tgftpeEntity) => tgftpeEntity.tgfpecs)
  @JoinColumn([
    { name: 'CODTIPOPESAGEM', referencedColumnName: 'codtipopesagem' },
  ])
  codtipopesagem: TgftpeEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpecs)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfpecs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo: TgfveiEntity;

  @OneToMany(() => TgfpeiEntity, (tgfpeiEntity) => tgfpeiEntity.nupesagem2)
  tgfpeis: TgfpeiEntity[];
}
