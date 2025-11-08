import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { Tgfcon2Entity } from './tGFCON2.entity';

@Index('PK_TGFPDD', ['nuconf', 'sequencia'], { unique: true })
@Entity('TGFPDD', { schema: 'SANKHYA' })
export class TgfpddEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpdds)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpdds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => Tgfcon2Entity, (tgfcon2Entity) => tgfcon2Entity.tgfpdds)
  @JoinColumn([{ name: 'NUCONF', referencedColumnName: 'nuconf' }])
  nuconf2: Tgfcon2Entity;
}
