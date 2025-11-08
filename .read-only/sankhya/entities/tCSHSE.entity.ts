import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsfetEntity } from './tCSFET.entity';
import { TcsfapEntity } from './tCSFAP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCSHSE', ['sequencia', 'nufap', 'numetapaorig', 'numetapadest'], {
  unique: true,
})
@Entity('TCSHSE', { schema: 'SANKHYA' })
export class TcshseEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('int', { primary: true, name: 'NUMETAPAORIG' })
  numetapaorig: number;

  @Column('int', { primary: true, name: 'NUMETAPADEST' })
  numetapadest: number;

  @Column('float', { name: 'QTDHORAS', nullable: true, precision: 53 })
  qtdhoras: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcshses)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPAORIG', referencedColumnName: 'numetapa' },
  ])
  tcsfet: TcsfetEntity;

  @ManyToOne(() => TcsfetEntity, (tcsfetEntity) => tcsfetEntity.tcshses2)
  @JoinColumn([
    { name: 'NUFAP', referencedColumnName: 'nufap' },
    { name: 'NUMETAPADEST', referencedColumnName: 'numetapa' },
  ])
  tcsfet2: TcsfetEntity;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcshses)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcshses)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
