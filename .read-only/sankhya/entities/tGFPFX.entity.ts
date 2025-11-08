import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgffaiEntity } from './tGFFAI.entity';
import { TgfinssrefEntity } from './tGFINSSREF.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPFX', ['competencia'], { unique: true })
@Entity('TGFPFX', { schema: 'SANKHYA' })
export class TgfpfxEntity {
  @Column('datetime', { primary: true, name: 'COMPETENCIA' })
  competencia: Date;

  @Column('float', { name: 'VLRDEPENDENTE', nullable: true, precision: 53 })
  vlrdependente: number | null;

  @Column('float', { name: 'VLRMINIMO', nullable: true, precision: 53 })
  vlrminimo: number | null;

  @Column('float', { name: 'VLRMAXIMO', nullable: true, precision: 53 })
  vlrmaximo: number | null;

  @Column('varchar', { name: 'REGIME', length: 1, default: () => "'P'" })
  regime: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'USACALCINSSPROG', nullable: true, length: 1 })
  usacalcinssprog: string | null;

  @Column('varchar', { name: 'USAPARCINSSFUNRURAL', nullable: true, length: 1 })
  usaparcinssfunrural: string | null;

  @Column('float', { name: 'VLRMINIMOIRPF', nullable: true, precision: 53 })
  vlrminimoirpf: number | null;

  @Column('varchar', { name: 'CONSDESCSIMPIRPF', nullable: true, length: 1 })
  consdescsimpirpf: string | null;

  @OneToMany(() => TgffaiEntity, (tgffaiEntity) => tgffaiEntity.competencia2)
  tgffais: TgffaiEntity[];

  @OneToMany(
    () => TgfinssrefEntity,
    (tgfinssrefEntity) => tgfinssrefEntity.competencia2,
  )
  tgfinssrefs: TgfinssrefEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpfxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
