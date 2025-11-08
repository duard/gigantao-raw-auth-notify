import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSEFL', ['codprod', 'variacao', 'codserv', 'sequencia', 'codusu'], {
  unique: true,
})
@Entity('TCSEFL', { schema: 'SANKHYA' })
export class TcseflEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'VARIACAO' })
  variacao: number;

  @Column('int', { primary: true, name: 'CODSERV' })
  codserv: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsefls)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
