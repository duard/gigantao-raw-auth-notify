import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TJCPRV', ['referencia', 'codnat', 'codvend'], { unique: true })
@Entity('TJCPRV', { schema: 'SANKHYA' })
export class TjcprvEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('money', { name: 'PROJVENDAS' })
  projvendas: number;

  @Column('money', { name: 'REALVENDAS', nullable: true })
  realvendas: number | null;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tjcprvs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tjcprvs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}
