import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcaiEntity } from './tGFCAI.entity';

@Index('PK_TGFMCX', ['nucaixa', 'origem', 'nrounico', 'dtalter'], {
  unique: true,
})
@Index('TGFMCX_I01', ['nubco'], {})
@Index('TGFMCX_I02', ['origem', 'nrounico'], {})
@Entity('TGFMCX', { schema: 'SANKHYA' })
export class TgfmcxEntity {
  @Column('int', { primary: true, name: 'NUCAIXA' })
  nucaixa: number;

  @Column('char', { primary: true, name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('datetime', { primary: true, name: 'DTALTER' })
  dtalter: Date;

  @Column('money', { name: 'VALOR' })
  valor: number;

  @Column('smallint', { name: 'RECDESP' })
  recdesp: number;

  @Column('int', { name: 'NUBCO', nullable: true })
  nubco: number | null;

  @Column('varchar', { name: 'NUMNSU', nullable: true, length: 15 })
  numnsu: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmcxes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcaiEntity, (tgfcaiEntity) => tgfcaiEntity.tgfmcxes)
  @JoinColumn([{ name: 'NUCAIXA', referencedColumnName: 'nucaixa' }])
  nucaixa2: TgfcaiEntity;
}
