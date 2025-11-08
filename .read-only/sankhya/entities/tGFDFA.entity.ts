import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfdfiEntity } from './tGFDFI.entity';
import { TgfdfnEntity } from './tGFDFN.entity';

@Index('PK_TGFDFA', ['nufin', 'coddesc'], { unique: true })
@Entity('TGFDFA', { schema: 'SANKHYA' })
export class TgfdfaEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODDESC' })
  coddesc: number;

  @Column('money', { name: 'VLRDESCCONTRATADO', nullable: true })
  vlrdesccontratado: number | null;

  @Column('money', { name: 'VLRDESC', nullable: true })
  vlrdesc: number | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfdfas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfdfas)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TgfdfiEntity, (tgfdfiEntity) => tgfdfiEntity.tgfdfas)
  @JoinColumn([{ name: 'CODDESC', referencedColumnName: 'coddesc' }])
  coddesc2: TgfdfiEntity;

  @OneToMany(() => TgfdfnEntity, (tgfdfnEntity) => tgfdfnEntity.tgfdfa)
  tgfdfns: TgfdfnEntity[];
}
