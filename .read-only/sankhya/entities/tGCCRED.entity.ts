import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgcgruEntity } from './tGCGRU.entity';
import { TgfcplEntity } from './tGFCPL.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGCCRED', ['codcred'], { unique: true })
@Entity('TGCCRED', { schema: 'SANKHYA' })
export class TgccredEntity {
  @Column('int', { primary: true, name: 'CODCRED' })
  codcred: number;

  @Column('char', { name: 'DESCRCRED', length: 40 })
  descrcred: string;

  @Column('text', { name: 'FORMULALC', nullable: true })
  formulalc: string | null;

  @Column('text', { name: 'FORMULALCM', nullable: true })
  formulalcm: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgccreds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgcgruEntity, (tgcgruEntity) => tgcgruEntity.codcred2)
  tgcgrus: TgcgruEntity[];

  @OneToMany(() => TgfcplEntity, (tgfcplEntity) => tgfcplEntity.codcred)
  tgfcpls: TgfcplEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.codcred2)
  tgfpars: TgfparEntity[];
}
