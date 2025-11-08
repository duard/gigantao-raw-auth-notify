import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFAUC', ['nunota'], { unique: true })
@Entity('TGFAUC', { schema: 'SANKHYA' })
export class TgfaucEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('float', { name: 'BASEICMS', precision: 53, default: () => '(0)' })
  baseicms: number;

  @Column('float', { name: 'VLRICMS', precision: 53, default: () => '(0)' })
  vlricms: number;

  @Column('float', { name: 'BASESUBSTIT', precision: 53, default: () => '(0)' })
  basesubstit: number;

  @Column('float', { name: 'VLRSUBST', precision: 53, default: () => '(0)' })
  vlrsubst: number;

  @Column('float', { name: 'BASEIPI', precision: 53, default: () => '(0)' })
  baseipi: number;

  @Column('float', { name: 'VLRIPI', precision: 53, default: () => '(0)' })
  vlripi: number;

  @Column('float', { name: 'VLRNOTA', precision: 53, default: () => '(0)' })
  vlrnota: number;

  @Column('float', { name: 'VLRFRETE', precision: 53, default: () => '(0)' })
  vlrfrete: number;

  @Column('float', { name: 'VLRSEG', precision: 53, default: () => '(0)' })
  vlrseg: number;

  @Column('float', { name: 'ALIQIRF', precision: 53, default: () => '(0)' })
  aliqirf: number;

  @Column('float', { name: 'VLRIRF', precision: 53, default: () => '(0)' })
  vlrirf: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfaucs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfauc)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
