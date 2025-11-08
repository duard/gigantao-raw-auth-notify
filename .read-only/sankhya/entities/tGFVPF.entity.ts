import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFVPF', ['nunota', 'nufin', 'sequencia'], { unique: true })
@Entity('TGFVPF', { schema: 'SANKHYA' })
export class TgfvpfEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTVINC', nullable: true })
  dtvinc: Date | null;

  @Column('float', { name: 'VLRVINC', nullable: true, precision: 53 })
  vlrvinc: number | null;

  @Column('float', { name: 'VLRATEND', nullable: true, precision: 53 })
  vlratend: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgfvpfs)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfvpfs)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
