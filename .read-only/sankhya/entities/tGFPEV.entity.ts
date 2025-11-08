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
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TGFPEV', ['nupev'], { unique: true })
@Entity('TGFPEV', { schema: 'SANKHYA' })
export class TgfpevEntity {
  @Column('int', { primary: true, name: 'NUPEV' })
  nupev: number;

  @Column('varchar', { name: 'CAMINHOPASTA', nullable: true, length: 512 })
  caminhopasta: string | null;

  @Column('varchar', { name: 'OBSCLIENTE', nullable: true, length: 512 })
  obscliente: string | null;

  @Column('varchar', { name: 'CODACESSO', nullable: true, length: 15 })
  codacesso: string | null;

  @Column('int', { name: 'TIMQTDFOTOS', nullable: true })
  timqtdfotos: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpevs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfpevs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @OneToMany(() => TimimvEntity, (timimvEntity) => timimvEntity.nupev)
  timimvs: TimimvEntity[];
}
