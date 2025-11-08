import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TgfordEntity } from './tGFORD.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TmsordcarregEntity } from './tMSORDCARREG.entity';
import { TmspedrotEntity } from './tMSPEDROT.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TMSPED', ['nuped'], { unique: true })
@Entity('TMSPED', { schema: 'SANKHYA' })
export class TmspedEntity {
  @Column('int', { primary: true, name: 'NUPED' })
  nuped: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('varchar', { name: 'CODVOLQTD', nullable: true, length: 100 })
  codvolqtd: string | null;

  @Column('datetime', { name: 'DTINICOLETA', nullable: true })
  dtinicoleta: Date | null;

  @Column('datetime', { name: 'DTFIMCOLETA', nullable: true })
  dtfimcoleta: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('int', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'ALTERAFRETE', nullable: true, length: 10 })
  alterafrete: string | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'CODPROJ', nullable: true })
  codproj: number | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.nuped)
  tgfords: TgfordEntity[];

  @OneToMany(
    () => TmsordcarregEntity,
    (tmsordcarregEntity) => tmsordcarregEntity.nuped,
  )
  tmsordcarregs: TmsordcarregEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmspeds)
  @JoinColumn([{ name: 'CODEMPNEGOC', referencedColumnName: 'codemp' }])
  codempnegoc: TsiempEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tmspeds)
  @JoinColumn([{ name: 'CODVOLMERC', referencedColumnName: 'codvol' }])
  codvolmerc: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmspeds)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tmspeds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmspeds2)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @OneToMany(() => TmspedrotEntity, (tmspedrotEntity) => tmspedrotEntity.nuped2)
  tmspedrots: TmspedrotEntity[];
}
