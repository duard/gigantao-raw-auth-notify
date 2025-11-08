import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';
import { TcstfuEntity } from './tCSTFU.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSFEE', ['nufap', 'numetapa', 'codusu', 'codtipfuncao'], {
  unique: true,
})
@Entity('TCSFEE', { schema: 'SANKHYA' })
export class TcsfeeEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPA' })
  numetapa: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODTIPFUNCAO' })
  codtipfuncao: number;

  @Column('char', { name: 'PRINCIPAL', length: 1, default: () => "'N'" })
  principal: string;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcsfees)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPA', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;

  @ManyToOne(() => TcstfuEntity, (tcstfuEntity) => tcstfuEntity.tcsfees)
  @JoinColumn([{ name: 'CODTIPFUNCAO', referencedColumnName: 'codtipfuncao' }])
  codtipfuncao2: TcstfuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsfees)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
