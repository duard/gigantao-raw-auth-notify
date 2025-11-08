import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgaahEntity } from './tGAAH.entity';
import { TgaparEntity } from './tGAPAR.entity';
import { TgfageEntity } from './tGFAGE.entity';
import { TgfeppEntity } from './tGFEPP.entity';
import { TgfmedEntity } from './tGFMED.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfoeqEntity } from './tGFOEQ.entity';
import { TgfsolEntity } from './tGFSOL.entity';

@Index('PK_TGFMEQ', ['numeq'], { unique: true })
@Entity('TGFMEQ', { schema: 'SANKHYA' })
export class TgfmeqEntity {
  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('char', { name: 'DESCRMEQ', length: 60 })
  descrmeq: string;

  @Column('int', { name: 'CODVEICULO', nullable: true, default: () => '(0)' })
  codveiculo: number | null;

  @Column('char', {
    name: 'TERCEIRO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  terceiro: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @OneToMany(() => TgaahEntity, (tgaahEntity) => tgaahEntity.numeq)
  tgaahs: TgaahEntity[];

  @OneToMany(() => TgaparEntity, (tgaparEntity) => tgaparEntity.nuequip)
  tgapars: TgaparEntity[];

  @OneToMany(() => TgfageEntity, (tgfageEntity) => tgfageEntity.numeq2)
  tgfages: TgfageEntity[];

  @OneToMany(() => TgfeppEntity, (tgfeppEntity) => tgfeppEntity.numeq2)
  tgfepps: TgfeppEntity[];

  @OneToMany(() => TgfmedEntity, (tgfmedEntity) => tgfmedEntity.numeq2)
  tgfmeds: TgfmedEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmeqs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmeqs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tgfmeqs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmeqs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfmeqs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @OneToMany(() => TgfoeqEntity, (tgfoeqEntity) => tgfoeqEntity.numeq2)
  tgfoeqs: TgfoeqEntity[];

  @OneToMany(() => TgfsolEntity, (tgfsolEntity) => tgfsolEntity.numeq)
  tgfsols: TgfsolEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfmeqs2)
  tgfpros: TgfproEntity[];
}
