import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFDTP', ['nunota', 'sequencia', 'seqprev'], { unique: true })
@Entity('TGFDTP', { schema: 'SANKHYA' })
export class TgfdtpEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'SEQPREV' })
  seqprev: number;

  @Column('datetime', { name: 'DTPREV', nullable: true })
  dtprev: Date | null;

  @Column('float', {
    name: 'QTD',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtd: number | null;

  @Column('float', {
    name: 'QTDENTREGUE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdentregue: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfdtps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfdtps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
