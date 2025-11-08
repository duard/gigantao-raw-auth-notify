import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgangiEntity } from './tGANGI.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGANGR', ['codngr'], { unique: true })
@Entity('TGANGR', { schema: 'SANKHYA' })
export class TgangrEntity {
  @Column('int', { primary: true, name: 'CODNGR' })
  codngr: number;

  @Column('datetime', { name: 'DTNGR' })
  dtngr: Date;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @OneToMany(() => TgangiEntity, (tgangiEntity) => tgangiEntity.codngr2)
  tgangis: TgangiEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgangrs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgangrs)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf: TgasafEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgangrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgangrs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgangrs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;
}
