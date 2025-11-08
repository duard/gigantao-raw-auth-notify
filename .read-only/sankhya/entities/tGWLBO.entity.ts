import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwtarEntity } from './tGWTAR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwittEntity } from './tGWITT.entity';

@Index('PK_TGWLBO', ['nutarefa', 'seqtarefa'], { unique: true })
@Entity('TGWLBO', { schema: 'SANKHYA' })
export class TgwlboEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQTAREFA' })
  seqtarefa: number;

  @Column('datetime', { name: 'DHSOLICITACAO' })
  dhsolicitacao: Date;

  @Column('decimal', { name: 'QTDENDERECO', precision: 13, scale: 4 })
  qtdendereco: number;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'P'" })
  situacao: string;

  @Column('datetime', { name: 'DHLIBERACAO', nullable: true })
  dhliberacao: Date | null;

  @Column('float', { name: 'QTDFALTA', nullable: true, precision: 53 })
  qtdfalta: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwlbos)
  @JoinColumn([{ name: 'CODUSUSOLICIT', referencedColumnName: 'codusu' }])
  codususolicit: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwlbos2)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib: TsiusuEntity;

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwlbos)
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwlbos)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @OneToOne(() => TgwittEntity, (tgwittEntity) => tgwittEntity.tgwlbo)
  @JoinColumn([
    { name: 'NUTAREFA', referencedColumnName: 'nutarefa' },
    { name: 'SEQTAREFA', referencedColumnName: 'sequencia' },
  ])
  tgwitt: TgwittEntity;
}
