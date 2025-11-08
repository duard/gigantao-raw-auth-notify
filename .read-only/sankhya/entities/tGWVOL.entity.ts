import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGWVOL', ['codendereco', 'codvol'], { unique: true })
@Entity('TGWVOL', { schema: 'SANKHYA' })
export class TgwvolEntity {
  @Column('int', { primary: true, name: 'CODENDERECO' })
  codendereco: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwvols)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;
}
