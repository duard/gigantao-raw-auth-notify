import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK__TCIIBE__756D6ECB', ['nunota', 'sequencia', 'codbem', 'codprod'], {
  unique: true,
})
@Index('TCIIBE_I01', ['codbem', 'nunota'], {})
@Index('TCIIBE_I02', ['codprod', 'codbem'], {})
@Entity('TCIIBE', { schema: 'SANKHYA' })
export class TciibeEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('int', { name: 'ORDEM' })
  ordem: number;

  @Column('varchar', { name: 'TIPMOVBEMSPED', nullable: true, length: 2 })
  tipmovbemsped: string | null;

  @Column('varchar', { name: 'ATUALBEM', nullable: true, length: 1 })
  atualbem: string | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tciibes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
